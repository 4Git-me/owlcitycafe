import coffeebeans from '../assets/images/Cafe/coffeebeans/coffeebeans.png';

export default function BeansBg() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-30 w-full flex justify-center pointer-events-none hidden sm:flex"
      style={{
        top: 'calc(100% + 2rem)',
        marginTop: '-80px',
        maxWidth: '100vw',
      }}
    >
      <img
        src={coffeebeans}
        alt="Coffee Beans"
        className="object-contain w-[60vw] max-w-[400px] min-w-[60px] opacity-60 md:w-1/2 sm:w-1/3 xs:w-1/4"
        style={{ height: 'auto' }}
      />
    </div>
  );
}
