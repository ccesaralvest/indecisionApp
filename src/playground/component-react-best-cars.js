class TheBestCars extends React.Component {
    render(){
        const applicationTitle = 'The Best Car Ever';
        const applicationSubtitle = 'See the best car above';

        const carName = 'Monza';
        const carYear = 1990;
        const carColors = ['Azul', 'Vermelho', 'Roxo'];

        return (
            <div>
                <Header title={applicationTitle} subTitle={applicationSubtitle} />
                <Options name={carName} year={carYear} colors={carColors}/>
            </div>
        )
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
            <ol>
                {
                    this.props.colors.map((color) => <Option key={color} year={this.props.year} option={color} />)
                }
            </ol>
        )
    }
}

class Option extends React.Component {
    render(){
        return <li>{this.props.year + ' ' + this.props.option}</li>
    }
}

ReactDOM.render(<TheBestCars />, document.getElementById('app'));