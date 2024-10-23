import Ye from '/app/assets/Ye.jpg'
import Zoheb from '/app/assets/Zoheb.jpg'
import Jineet from '/app/assets/Jineet.jpg'

const teamMembers = [
    {
        id: 1,
        name: 'Zoheb Rahman',
        position: 'Logistics Coordinator',
        image: Zoheb, // Image path from the public folder
    },
    {
        id: 2,
        name: 'Ye Thu Hlaing',
        position: 'Event Lead',
        image: Ye,
    },
    {
        id: 3,
        name: 'Jineet Mehta',
        position: 'Finance Manager',
        image: Jineet,
    },
];

const Team = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col justify-center items-center mb-15 py-20">
              <h1 className='text-5xl font-black md:text-8xl uppercase mb-4'>Our Team</h1>
              <h2 className="text-lg md:text-xl text-center mt-2 mb-6  text-neutral-400 max-w-3xl">Meet the people who make it all happen.</h2>
          </div> 

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`shadow-md rounded-lg p-6 text-center transform ${index === 1 ? 'order-first sm:order-none' : ''}`} // Adjust order for small screens
            >
              <img
                className="mx-auto rounded-xl"
                src={member.image.src}
                alt={member.name}
              />
              <h3 className="mt-4 text-xl font-semibold ">{member.name}</h3>
              <p className="mt-2 text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;