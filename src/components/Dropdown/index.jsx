import './index.css'

function CreateOptions() {
  const items = [
    'Mesa 1',
    'Mesa 2',
    'Mesa 3',
    'Mesa 4',
    'Mesa 5',
    'Mesa 6',
  ];
  
  return items.map(item => <option value={item}>{item}</option>)
}

function RDropdown() {
  return (
    <select className="form-control">
      <CreateOptions/>
    </select>
  );
}

export default RDropdown;