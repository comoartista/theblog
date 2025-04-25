import type { Schema, Struct } from '@strapi/strapi';

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    postImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface TextText extends Struct.ComponentSchema {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    postText: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image': ImageImage;
      'text.text': TextText;
    }
  }
}
