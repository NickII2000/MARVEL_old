import { Component } from "react";
// import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";
// import ErrorBoundary from "../errorBoundary/ErrorBoundary";

// import decoration from '../../resources/img/vision.png';

// class App extends Component {
//     state = {
//         selectedChar: null,
//     }

//     onCharSelected = (id) => {
//         this.setState({
//             selectedChar: id
//         })
//     }

//     render() {
//         return (
//             <div className="app">
//                 <AppHeader />
//                 <main>
//                     <ErrorBoundary>
//                         <RandomChar />
//                     </ErrorBoundary>
//                     <div className="char__content">
//                         <ErrorBoundary>
//                             <CharList onCharSelected={this.onCharSelected} />
//                         </ErrorBoundary>
//                         <ErrorBoundary>
//                             <CharInfo charId={this.state.selectedChar} />
//                         </ErrorBoundary>
//                     </div>
//                     <img className="bg-decoration" src={decoration} alt="vision" />
//                 </main>
//             </div>
//         )
//     }
// }

import styled from 'styled-components';

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'blue' : 'pink'};
    }
    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 24px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: 'Нажато: ',
            position: '',
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: this.state.years + 1,
            text: this.state.text + '+ ',
        }));
    }

    commitInputChanges = (e, color) => {
        // console.log(e.target.value);
        console.log(color);
        this.setState({
            position: e.target.value
        });
    }

    render() {
        const { name, surname, link } = this.props;
        const { years, text, position } = this.state;

        // console.log(this);

        return (
            <EmpItem active>
                <Button onClick={this.nextYear}>{text}</Button>
                <Header>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />

                </form>
            </EmpItem>
        );
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
    return (
        <div className={'mb-3 p-3 border-' + props.color} className={'mb-3 p-3 border-' + props.color} >
            {props.children}
        </div >
    )

}

function App() {
    return (
        <Wrapper>
            <WhoAmI name='John' surname="Smith" link="ok.ru" />
            <WhoAmI name='Alex' surname="Shepard" link="vk.ru" />
        </Wrapper>

    );
}

export default App;