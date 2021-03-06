function Loader(): JSX.Element {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <p
        style={{
          padding: '50px',
          color: 'darkblue',
          fontSize: '50px',
          textAlign: 'center',
        }}
      >
        Loading...
      </p>
    </div>
  );
}

export default Loader;
