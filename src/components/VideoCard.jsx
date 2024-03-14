import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addHistory, deleteVideo } from '../services/allApi';

function VideoCard({video,setDeleteStatus}) {
  const [show, setShow] = useState(false);
  const [history, setHistory] = useState({
    caption:video.caption, url: video.url, datetime:''
  })

  const handleDelete=async(id)=>{
    console.log(id)
    const res= await deleteVideo(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
      setDeleteStatus(res)
      toast.success("Video Deleted Successfully!!!")
    }else{
      toast.error("Video Deletion Failed!!!")
    }
  }

  const handleClose = () => {
    addHistory(history)
    setShow(false)
  };

  const handleShow = () => {
    const dt =new Date()
    setHistory ({...history, datetime: new Date() })
    //addHistory(history)
    setShow(true);
  }
  
  return (
    <>
      <div className='VdoCard'>
      <Card className='ms-3 mb-3 border-success' style={{width:'auto', height:'300px'}}> 
        <Card.Img style={{height:'200px',borderRadius:'15px'}} variant="top" src={video.image}  onClick={handleShow}/>
        <Card.Body className='d-flex flex-row justify-content-between'>
          <Card.Title style={{color:'white'}}>{video.caption}</Card.Title>
          <i className="fa-solid fa-trash fa-lg p-3" style={{color:'#e51515'}}  onClick={()=>{handleDelete(video.id)}}></i>
        </Card.Body>
      </Card>
      </div>
    
      <Modal  show={show} onHide={handleClose}  backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default VideoCard