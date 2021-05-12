import './WinOrLoose.scss';

const WinOrLoose = ({ status }) => {
  return (
    <div className='win-loose-popup'>
      <div>You {status}</div>
      <button
        type='button'
        onClick={(e) => {
          e.target.parentNode.className = 'win-loose-popup-close';
          document.location.reload();
        }}
      >
        click to restart !
      </button>
    </div>
  );
};

export default WinOrLoose;
