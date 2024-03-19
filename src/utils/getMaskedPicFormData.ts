import { StylePrompts } from 'interfaces';
import * as FormData from 'form-data';

export const getMaskedPicFormData = (stylePrompts: StylePrompts, originalPic: string, maskedPic: string) => {
  const formData = new FormData();
  formData.append('text_prompts[0][text]', stylePrompts.positive);
  formData.append('text_prompts[0][weight]', '1');
  formData.append('text_prompts[1][text]', stylePrompts.negative);
  formData.append('text_prompts[1][weight]', '-1');
  formData.append('init_image', Buffer.from(originalPic, 'base64'), { contentType: 'image/png' });
  formData.append('mask_source', 'MASK_IMAGE_BLACK');
  formData.append('mask_image', Buffer.from(maskedPic, 'base64'), { contentType: 'image/png' });
  formData.append('sampler', 'K_EULER_ANCESTRAL');

  return formData;
};
