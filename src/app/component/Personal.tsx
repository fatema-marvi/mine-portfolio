import Image from "next/image";
const Personal: React.FC = () => {
  return (
    <div id="personl-info" className="flex flex-col md:flex-row items-centre space-y-4
  md:space-y-0 md:space-x-6">


      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">

        <Image src="/IMG_20180823_131226.jpg" alt="Profile Image" width={192} height={192}
          className="object-cover" />
      </div>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6 pt-5">PERSONAL INFORMATION</h2>

        <p className='font-large '>NAME: Fatema Adnan Marvi </p>
        <p className='font-large '>AGE: 32 yrs </p>
        <p className='font-large '>CITY: Karachi</p>

      </section>
    </div>
  );
};

export default Personal;
