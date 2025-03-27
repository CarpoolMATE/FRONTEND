export type CropModalProps = {
  imageUrl: string;
  onCrop: (croppedImage: File) => void;
  onClose: () => void;
};

export type ImageUploaderProps = {
  currentImage: string | null;
  onUpload: (filePath: string) => void;
};
