class IndesicionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life in the computer hands';
        const options  = ['Thing One', 'Thing Two', 'Thing Four'];
       
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Options options={options} />
            </div>
            
            /* <Action /><Options /><AddOptions /> */
        );
    }
};

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
};

class Options extends React.Component {
    render(){
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} option={option}  />)
                }
            </div>
        )
    }
};

class Option extends React.Component {
    render(){
        return <div>{this.props.option}</div>
    }
};

ReactDOM.render(<IndesicionApp />, document.getElementById('app'));