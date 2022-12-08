function App() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
    <li key={number.toString()}>
            {number}
        </li>
    );
    return listItems
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);