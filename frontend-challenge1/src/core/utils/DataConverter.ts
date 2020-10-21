import dayjs from 'dayjs';

type Props = {
   data: string;
}

const DataConverter = ({data}: Props) => {
   let now = dayjs(data)
   return (
      now.format("DD/MM/YYYY")
   );
}

export default DataConverter;