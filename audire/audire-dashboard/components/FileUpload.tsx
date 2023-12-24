import { FC, useCallback, useEffect, useRef } from 'react';
import { useR2Upload } from '@learning-app/r2';
import { FaCloudUploadAlt } from 'react-icons/fa';

type FileUploadProps = {
  label: string;
  keyPrefix: string;
  isBigFile: boolean;
  value?: string;
  onComplete?: (key: string | null) => void;
  onError?: () => void;
};

const FileUpload: FC<FileUploadProps> = (props) => {
  const { label, keyPrefix: targetKey, isBigFile, onComplete, value } = props;
  const { trigger, reset } = useR2Upload();
  const ref = useRef<HTMLInputElement>(null);

  const triggerUpload = useCallback(
    async (fileContents: File) => {
      console.info('Triggering Upload for', fileContents);
      const key = makeUploadKey(targetKey, fileContents);
      const r = await trigger({
        key,
        isBigFile,
        fileContents,
      });
      onComplete?.(key);
      console.info('Uploaded', { r });
      reset();
      if (ref.current) {
        // Clear selected files
        ref.current.value = '';
      }
    },
    [isBigFile, onComplete, reset, targetKey, trigger]
  );

  useEffect(() => {
    const _input = ref.current;
    if (!_input) {
      return;
    }

    const handleChange = (e: Event) => {
      const files = Array.from(_input.files ?? []);
      if (!files.length) {
        console.info('No File Selected');
        return;
      }
      triggerUpload(files[0]);
    };

    _input.addEventListener('change', handleChange);

    return () => _input.removeEventListener('change', handleChange);
  }, [triggerUpload]);

  const showFileDialog = () => {
    ref.current?.click();
  };

  return (
    <div
      className="flex items-center justify-center border border-4 border-black-500 border-dashed p-4"
      onClick={showFileDialog}
    >
      <h4 className="text-sm font-medium flex flex-col items-center justify-center">
        {label}
        <input ref={ref} type="file" hidden />
        <FaCloudUploadAlt className="text-2xl ml-2" />
      </h4>
    </div>
  );
};

export default FileUpload;

function makeUploadKey(keyPrefix: string, file: File) {
  let fileName = file.name;
  const parts = file.name.split('.');
  if (parts.length > 1) {
    fileName =
      parts
        .slice(0, -1)
        .join('-')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-') +
      '.' +
      parts.slice(-1)[0];
  } else {
    fileName = file.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';
  for (let i = 0; i < 8; i++) {
    nonce += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return `${keyPrefix}${nonce}-${fileName}`;
}
