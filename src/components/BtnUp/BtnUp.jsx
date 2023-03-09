export const BtnUp = ({ scrollUp }) => {
  return (
    <>
      <button
        style={{
          width: '50px',
          height: '50px',
          background: 'blue',
          zIndex: '9999',
          borderRadius: '100%',
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
        }}
        onClick={scrollUp}
      >
        Click
      </button>
    </>
  );
};
