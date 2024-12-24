'use client';

import { useState } from 'react';
import { Paperclip } from 'lucide-react';
import { DocumentSearch } from './document-search';
import { DocumentItem } from './document-item';

const documents: { id: number; label: string; format: 'DOCX' | 'PDF' | 'XLSX'; size: string; urlPath: string }[] = [
  {
    id: 1,
    label: 'Документ 1',
    format: 'PDF',
    size: '100 КБ',
    urlPath: '/',
  },
  {
    id: 2,
    label:
      'Какое-то оооооооооооооочень приоооооооооооооооооооооооочень длиноооооооооооооооооое названиииииииииииииииииииие доооооооооооооооооооооооооооооооокумента',
    format: 'XLSX',
    size: '150 КБ',
    urlPath: '/',
  },
  {
    id: 3,
    label: 'Документ 3',
    format: 'DOCX',
    size: '120 КБ',
    urlPath: '/',
  },
  {
    id: 4,
    label: 'Документ 4',
    format: 'DOCX',
    size: '120 КБ',
    urlPath: '/',
  },
  {
    id: 5,
    label: 'Документ 5',
    format: 'DOCX',
    size: '120 КБ',
    urlPath: '/',
  },
  {
    id: 6,
    label: 'Документ 6',
    format: 'DOCX',
    size: '120 КБ',
    urlPath: '/',
  },
];

const DocumentTableHeader = () => (
  <thead className='bg-blue-500 rounded'>
    <tr className='grid grid-cols-12 gap-x-2 px-2 py-1 text-white text-left'>
      <th className='font-normal col-span-1 text-center'>Формат</th>
      <th className='font-normal col-span-10'>Название</th>
      <th className='font-normal col-span-1 text-center'>Размер</th>
    </tr>
  </thead>
);

const NoDocumentsMessage = () => (
  <tr className='flex items-center justify-center mt-3'>
    <td className='flex items-center gap-3'>
      <div className='bg-blue-500 p-1.5 rounded'>
        <Paperclip className='stroke-white size-6' />
      </div>
      <span className='text-blue-500 text-2xl'>Файла с таким названием нет</span>
    </td>
  </tr>
);

interface IDocumentListProps {
  label: string;
}

export const DocumentList: React.FC<IDocumentListProps> = (props) => {
  const { label } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');

  let filteredDocuments;
  if (!searchTerm) {
    filteredDocuments = documents;
  } else {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    filteredDocuments = documents.filter((document) => document.label.toLowerCase().includes(lowercasedSearchTerm));
  }

  return (
    <div className='relative'>
      <DocumentSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table className='w-full flex flex-col gap-1.5'>
        <caption className='self-start text-xl text-blue-500 font-medium mb-2'>{label}</caption>
        <DocumentTableHeader />
        <tbody className='min-h-36 flex flex-col gap-1'>
          {filteredDocuments.length ? (
            filteredDocuments.map((document) => (
              <DocumentItem
                key={document.id}
                format={document.format}
                urlPath={document.urlPath}
                label={document.label}
                size={document.size}
              />
            ))
          ) : (
            <NoDocumentsMessage />
          )}
        </tbody>
      </table>
    </div>
  );
};
