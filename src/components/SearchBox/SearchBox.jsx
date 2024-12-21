import s from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
return (
    <div className={s.search_box}>
        <p>Find contacts by name</p>
    <input value={value} onChange={onChange} />
    </div>
)
};

export default SearchBox;