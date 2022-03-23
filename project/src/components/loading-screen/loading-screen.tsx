function LoadingScreen(): JSX.Element {
  return (
    <p
      style={{
        position: 'fixed',
        top: '30px',
        right: '30px',
        padding: '10px',
        backgroundColor: '#98fb98',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      Loading...
    </p>
  );
}

export default LoadingScreen;
