import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import SubjectOutline from './components/SubjectOutline';
import SubjectOutlineleft from './components/SubjectOutlineleft';
import Footer from './components/Footer';
function App() {
  
  const ai="Artificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems. It is a field of research in computer science that develops and studies methods and software that enable machines to perceive their environment and uses learning and intelligence to take actions that maximize their chances of achieving defined goals.[1] Such machines may be called AIs."
  const bc="A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.[1][2][3][4] Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). Since each block contains information about the previous block, they effectively form a chain (compare linked list data structure), with each additional block linking to the ones before it. Consequently, blockchain transactions are irreversible in that, once they are recorded, the data in any given block cannot be altered retroactively without altering all subsequent blocks. ";
  const cloud="form of Internet-based computing, whereby shared resources, software and information are provided to computers and other devices. Cloud computing is when computing services are provided by a company or place outside of where they are being used";
  const disruption="In business theory, disruptive innovation is innovation that creates a new market and value network or enters at the bottom of an existing market and eventually displaces established market-leading firms, products, and alliances.[1] The term, disruptive innovation was popularized by the American academic Clayton Christensen and his collaborators beginning in 1995,[2] but the concept had been previously described in Richard N. Foster's book Innovation: The Attacker's Advantage and in the paper Strategic Responses to Technological Threats";
  const digitalTransfrm="Digital transformation (DT) is the process of adoption and implementation of digital technology[1][2][3] by an organization in order to create new or modify existing products, services and operations by the means of translating business processes into a digital format.";
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <SubjectOutline subject="AI" data={ai}/>
        <SubjectOutlineleft subject="Blockchain" data={bc} />
        <SubjectOutline subject="Cloud" data={cloud}/>
        <SubjectOutlineleft subject="Disruption" data={disruption}/>
        <SubjectOutline subject="Digital Transformation" data={digitalTransfrm}/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
