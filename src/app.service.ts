import { Injectable } from '@nestjs/common';
import * as FormData from 'form-data';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map, switchMap } from 'rxjs';
import { getMaskedPicFormData, getStylePrompts } from 'utils';
import { Balance, GenerationRequest, GenerationResponse, PicturesRequest, User } from 'interfaces';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getUserInfo(): Observable<AxiosResponse<User>> {
    return this.httpService.get('user/account').pipe(map((response) => response.data));
  }

  getBalance(): Observable<AxiosResponse<Balance>> {
    return this.httpService.get('user/balance').pipe(map((response) => response.data));
  }

  generatePictures(body: PicturesRequest): Observable<{
    originalPic: GenerationResponse;
    maskedPic: GenerationResponse;
  }> {
    const stylePrompts = getStylePrompts(body.style, body.topic);
    const originalPicBody: GenerationRequest = {
      text_prompts: [
        { text: stylePrompts.positive, weight: 1 },
        { text: stylePrompts.negative, weight: -1 },
      ],
      sampler: 'K_EULER_ANCESTRAL',
    };

    return this.generateOriginalPic(originalPicBody).pipe(
      switchMap((originalPicRes) => {
        const formData = getMaskedPicFormData(stylePrompts, originalPicRes.artifacts[0].base64, body.maskImage);

        return this.generateMaskedPic(formData).pipe(map((maskedPic) => ({ originalPic: originalPicRes, maskedPic })));
      }),
    );
  }

  getHealthcheck(): string {
    return 'Healthcheck!';
  }

  private generateOriginalPic(body: GenerationRequest): Observable<GenerationResponse> {
    return this.httpService
      .post('generation/stable-diffusion-xl-1024-v1-0/text-to-image', body)
      .pipe(map((originalPic) => originalPic.data));
  }

  private generateMaskedPic(body: FormData): Observable<GenerationResponse> {
    const headers = { 'Content-Type': 'multipart/form-data' };
    return this.httpService
      .post('generation/stable-diffusion-xl-1024-v1-0/image-to-image/masking', body, { headers })
      .pipe(map((maskedPic) => maskedPic.data));
  }
}
