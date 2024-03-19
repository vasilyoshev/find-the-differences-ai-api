import { Style } from 'enums';
import { StylePrompts } from 'interfaces';

export const getStylePrompts = (style: Style, topic: string): StylePrompts =>
  ({
    [Style.DigitalArt]: {
      positive: `concept art ${topic} . digital artwork, illustrative, painterly, matte painting, highly detailed`,
      negative: 'photo, photorealistic, realism, ugly',
    },
    [Style.Model3D]: {
      positive: `professional 3d model ${topic} . octane render, highly detailed, volumetric, dramatic lighting`,
      negative: 'ugly, deformed, noisy, low poly, blurry, painting',
    },
    [Style.Anime]: {
      positive: `anime artwork ${topic} . anime style, key visual, vibrant, studio anime, highly detailed`,
      negative:
        'photo, deformed, black and white, realism, disfigured, low contrast',
    },
    [Style.ComicBook]: {
      positive: `comic ${topic} . graphic illustration, comic art, graphic novel art, vibrant, highly detailed`,
      negative: 'photograph, deformed, glitch, noisy, realistic, stock photo',
    },
    [Style.FantasyArt]: {
      positive: `ethereal fantasy concept art of ${topic} . magnificent, celestial, ethereal, painterly, epic, majestic, magical, fantasy art, cover art, dreamy`,
      negative:
        'photographic, realistic, realism, 35mm film, dslr, cropped, frame, text, deformed, glitch, noise, noisy, off-center, deformed, cross-eyed, closed eyes, bad anatomy, ugly, disfigured, sloppy, duplicate, mutated, black and white',
    },
    [Style.Neonpunk]: {
      positive: `neonpunk style ${topic} . cyberpunk, vaporwave, neon, vibes, vibrant, stunningly beautiful, crisp, detailed, sleek, ultramodern, magenta highlights, dark purple shadows, high contrast, cinematic, ultra detailed, intricate, professional`,
      negative:
        'painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured',
    },
    [Style.Origami]: {
      positive: `origami style ${topic} . paper art, pleated paper, folded, origami art, pleats, cut and fold, centered composition`,
      negative:
        'noisy, sloppy, messy, grainy, highly detailed, ultra textured, photo',
    },
    [Style.PixelArt]: {
      positive: `pixel-art ${topic} . low-res, blocky, pixel art style, 8-bit graphics`,
      negative:
        'sloppy, messy, blurry, noisy, highly detailed, ultra textured, photo, realistic',
    },
    [Style.AbstractExpressionism]: {
      positive: `abstract expressionist painting ${topic} . energetic brushwork, bold colors, abstract forms, expressive, emotional`,
      negative:
        'realistic, photorealistic, low contrast, plain, simple, monochrome',
    },
    [Style.Cubist]: {
      positive: `cubist artwork ${topic} . geometric shapes, abstract, innovative, revolutionary`,
      negative:
        'anime, photorealistic, 35mm film, deformed, glitch, low contrast, noisy',
    },
  })[style];
