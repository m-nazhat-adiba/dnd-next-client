import Image from 'next/image';

interface CardProps {
  data?: {
    name: string;
    image: string;
  };
}

export const PlayerCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className='flex items-center gap-4'>
      <Image
        src={data?.image || '/images/avatar.jpg'}
        height={100}
        width={100}
        alt='avatar'
        className='rounded-full h-12 w-12'
      />
      <span className='whitespace-nowrap'>
        {data?.name || 'Nyx Frostsmith'}
      </span>
    </div>
  );
};
