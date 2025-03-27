export type CropModalProps = {
  imageUrl: string;
  onCrop: (croppedImage: File) => void;
  onClose: () => void;
};

export type ImageUploaderProps = {
  size?: number;
  currentImage: string | null;
  onUpload: (filePath: string) => void;
};
