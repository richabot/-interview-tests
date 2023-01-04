import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';

function DropDirectioExample() {
  return (
    <>
      <div className="mb-2">
        
            <DropdownButton
              // as={ButtonGroup}
              key='end'
              id={`dropdown-button-drop-end`}
              drop="end"
              variant="secondary"
              title={` Drop end `}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
       
      </div>

     
    </>
  );
}

export default DropDirectioExample;