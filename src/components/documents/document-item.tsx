import { DOCXIcon, PDFIcon, XLSXIcon } from './document-icon';

interface IDocumentItemProps {
  format: 'DOCX' | 'PDF' | 'XLSX';
  urlPath: string;
  label: string;
  size: string;
}

export const DocumentItem: React.FC<IDocumentItemProps> = (props) => {
  const { format, label, size, urlPath } = props;

  const documentIcon = {
    DOCX: <DOCXIcon />,
    PDF: <PDFIcon />,
    XLSX: <XLSXIcon />,
  }[format];

  return (
    <tr className='grid grid-cols-12 gap-x-2 text-zinc-700 px-2 py-1 [box-shadow:0_0_3px] rounded shadow-zinc-700'>
      <td className='col-span-1 flex justify-center items-center text-current'>{documentIcon}</td>
      <td className='col-span-10 text-current'>
        <a
          href={urlPath}
          target='_blank'
          className='inline-block transition-colors duration-300 hover:text-blue-500 leading-none'
        >
          {label}
        </a>
      </td>
      <td className='col-span-1 flex justify-center items-center text-sm text-current'>{size}</td>
    </tr>
  );
};
