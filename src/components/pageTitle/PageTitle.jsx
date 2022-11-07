import './PageTitle.scss';

function PageTitle(props) {
  return (
    <div className="page-title heading5">
        <p><span className='number'>{props.order}</span>{props.title}</p>
    </div>
  );
}

export default PageTitle;