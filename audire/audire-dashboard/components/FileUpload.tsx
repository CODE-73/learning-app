import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useR2Upload, makeUploadKey } from '@learning-app/r2';
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
  const ref = useRef<HTMLInputElement>(null);
  const [file, setSelectedFile] = useState<File | null>(null);
  const [uploadedKeys, setUploaded] = useState<string[]>([]);

  const key = useMemo(
    () => (file !== null ? makeUploadKey(targetKey, file) : null),
    [targetKey, file]
  );

  const { data: uploadStatus, error: uploadError } = useR2Upload({
    key: key && uploadedKeys.includes(key) ? null : key,
    isBigFile,
    fileContents: file,
  });

  useEffect(() => {
    if (uploadStatus?.uploadDone) {
      onComplete?.(key);
      setUploaded((prev) => [...prev, key!]);
      if (ref.current) {
        // Clear selected files
        ref.current.value = '';
      }
    }
  }, [key, onComplete, uploadStatus]);

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
      setSelectedFile(files[0]);
    };

    _input.addEventListener('change', handleChange);

    return () => _input.removeEventListener('change', handleChange);
  }, []);

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
        {uploadStatus && <span>{uploadStatus.progress}%</span>}
        <input ref={ref} type="file" hidden />
        <FaCloudUploadAlt className="text-2xl ml-2" />
      </h4>
    </div>
  );
};

export default FileUpload;
