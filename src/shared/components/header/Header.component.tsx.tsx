import * as React from 'react';
import './header.scss';
interface Education {
    id: number;
    schoolName: string;
    programName: string;
    started: number;
    ended: number;
}
const Header = () => {
    const [name, setName] = React.useState('name');
    return (
        <div className="head">
            {name}
            <input type="text" onChange={name => setName(name.target.value)}></input>
        </div>
    );
};
export default Header;
