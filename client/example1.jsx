//React Class components
//older syntax, more wordy/verbose

//Functional componets(all developers use now)
//newer,learner,oftern faster, etc.

class HelloWorld extends React.Component {
    render(){
        return (
            <div>
                Hello World!!!
            </div>
        )
    }
};

const init = () =>{
    ReactDOM.render(<HelloWorld />, document.querySelector("#app"));
}
window.onload = init;