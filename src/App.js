import './App.css';

const user = {
  photo: "https://i.imgur.com/OKS67lhm.jpg",
  about: "Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment for schistosomiasis."
}

function App() {
  // <SplitPane left={<Contacts />} right={<Chat />} />
    // <div>
    //   <FancyBorder color="purple">
    //     <BoldText>
    //       <h1>Hello!</h1>
    //       <p>I'm in a fancy border AND BOLD.</p>
    //     </BoldText>
    //   </FancyBorder>
    // </div>
  return (
    <Profile photo={user.photo} about={user.about} />
  );
}

function Card(props) {
  return (
    <div className='card'>
      <div className='card-content'>
        {props.children}
      </div>
    </div>
  )
}

function Profile(props) {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          src={props.photo}
          width={100}
          height={100}
          className='avatar'
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>{props.about}</p>
      </Card>
    </div>
  )
}

function BoldText(props) {
  return <div style={{fontWeight: 'bolder'}}>{props.children}</div>
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function Welcome() {}

function SplitPane(props) {
  return (
    <div className='SplitPane'>
      <div className='SplitPane-left'>
        {props.left}
      </div>
      <div className='SplitPane-right'>
        {props.right}
      </div>
    </div>
  )
}






function Contacts() {
  return <div className='Contacts'><p>Contact List</p></div>
}

function Chat() {
  return <div className="Chat"><p>Let's chat!</p></div>
}

function Parent(props) {
  return (
    <div style={{color: 'blue'}}>
      {props.child}
    </div>
  )
}

export default App;
