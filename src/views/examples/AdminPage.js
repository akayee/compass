/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {takeData,updateData,addData,logout,deleteData} from "components/firebase/auth"
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

// reactstrap components
import { Container, Row, Col,Card,CardHeader,CardBody,CardImg,Button,Input,Label,Alert,Nav,NavItem,NavLink,TabContent,TabPane } from "reactstrap";
import { Component } from "react";
import CardFooter from "reactstrap/lib/CardFooter";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import classnames from 'classnames';


// core components




class AdminPage extends Component {

  constructor(...args) {
    super(...args);
    this.state = { 
      Baslik:null,
      Aciklama:null,
      admin:false,
      KursBaslik:null,
      KursAciklama:null,
      data:{},
      KursLink:null,
      filenames: [],
      downloadURLs: [],
      isUploading: false,
      uploadProgress: 0,
      Activities:[],
      Courses:[],
      Messages:[],
      activeTab:"1"
    };
  }

  componentDidMount(){
    
    this.takeDat();
    window.scrollTo(0, 0);
  }

  takeDat=()=>{
    var that=this;
    takeData("Aktivite").on('value',(snapshot)=>{
      let data =snapshot.val();
      that.setState({
        Activities:data
      })
    } );
    takeData("Dersler").on('value',(snapshot)=>{
      let data =snapshot.val();
      that.setState({
        Courses:data
      })
    } );
    takeData("Mesajlar").on('value',(snapshot)=>{
      let data =snapshot.val();
      that.setState({
        Messages:data
      })
    } );
  }
  //Aktivite güncelleme fonksiyonu
  updateActivity=(data)=>{
    
    let table="Aktivite";
    updateData(data,table)
  }
//Kurs güncelleme fonksiyonu
  updateCourse=(data)=>{    
    
    let table="Dersler";
    updateData(data,table)
  }

  //Aktivite Data ekleme fonksiyonu 
  addnewActivityData=()=>{
    let arr=[];
    let data={
      Baslik:this.state.Baslik,
      Aciklama:this.state.Aciklama,
      src:this.state.downloadURLs
    };
    let table="Aktivite";
    addData(data,table).then(this.setState({
      downloadURLs:arr,
      filenames:arr,
      Baslik:null,
      Aciklama:null
    })).then(<Alert color="success" >Aktivite Başarıyla Eklendi</Alert>)
  }
  //Kurs Data Ekleme fonksiyonu
  addnewCourseData=()=>{
    let arr=[];
    let data={
      KursAciklama:this.state.KursAciklama,
      KursBaslik:this.state.KursBaslik,
      KursLink:this.state.KursLink,
      src:this.state.downloadURLs
    };
    let table="Dersler";
    addData(data,table).then(this.setState({
      downloadURLs:arr,
      filenames:arr,
      KursBaslik:null,
      KursAciklama:null,
      KursLink:null
    })).then(<Alert color="success" >Ders Başarıyla Eklendi</Alert>)
  }

  //Data Silme
  deleteActivity=(data)=>{
    
    let table="Aktivite";
    deleteData(data,table)

  }

  //Kurs silme fonksiyonu
  deleteCourse=(data)=>{    
    
    let table="Dersler";
    deleteData(data,table)
  }

  handleChange =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })

  }
  handleChangeUpdate =(e,item)=>{

    const name=e.target.name;
    const value=e.target.value;
    this.setState(prevState => ({
      Activities: Object.keys(prevState.Activities).map((key, index)=>( prevState.Activities[key].id === item? { ...prevState.Activities[key], [name]: value }: prevState.Activities[key]
        ))
     
    
    }))

  }


  //File Uploader Fonksiyonları
  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });
 
  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });
 
  handleUploadError = error => {
    this.setState({
      isUploading: false
      // Todo: handle error
    });
    console.error(error);
  };
 //URL ve Dosya ismini alan fonksiyon
  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("activities")
      .child(filename)
      .getDownloadURL();
 
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };
  toggle = tab => {
    if(this.state.activeTab !== tab){
      this.setState({
        activeTab:tab
      })
    };
  }
 
  render(){
    const {Activities}=this.state;
    const{Courses}=this.state;
    const{Messages}=this.state;
    return (
      <>
      
        <ExamplesNavbar />
        <div className="filter" />
         
            
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Nav tabs className="text-center">
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
            <Button>Aktivite Ekle</Button>
          </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                <Button>Ders Ekle</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                <Button>Mesaj Bırakanları Gör</Button>
              </NavLink>
            </NavItem>
          </Nav>
          
          <Button color="danger" style={{float: 'right'}} onClick={e=>logout()}> Logout</Button>
          <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <Container className="text-center">
          <div className="section">
            <h2 className="title">Recently Activity Ekleme Ekranı</h2>
            <Card>
            <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
              Resim ekle
            <FileUploader
              hidden
              accept="image/*"
              name="image-uploader"
              randomizeFilename
              storageRef={firebase.storage().ref("activities")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
            </label>
            <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
              Resim ekle
            <FileUploader
              hidden
              accept="image/*"
              name="image-uploader"
              randomizeFilename
              storageRef={firebase.storage().ref("activities")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
            </label>
            <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
              Resim ekle
            <FileUploader
              hidden
              accept="image/*"
              name="image-uploader"
              randomizeFilename
              storageRef={firebase.storage().ref("activities")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
            />
            </label>
    
            <p>Progress: {this.state.uploadProgress}</p>
    
            <p>Filenames: {this.state.filenames.join(", ")}</p>
    
            <div>
              {this.state.downloadURLs.map((downloadURL, i) =><Col className="ml-auto" > <img key={i} src={downloadURL} alt="Image" height="42" width="42"/></Col>
              )}
            </div>
            <Label>Title</Label>
                <Input name="Baslik" value={this.state.Baslik} onChange={this.handleChange}></Input>
                <CardBody>
                <Label>Summary</Label>
                <Input type="textarea" name="Aciklama" value={this.state.Aciklama} onChange={this.handleChange}  ></Input>
                </CardBody>
                <CardFooter>
                  
                <Button color="success" name="Ekle" onClick={this.addnewActivityData}> Ekle</Button>
                </CardFooter>
            </Card>
          <Row>
            {
              Object.keys(Activities).map((key, index)=> (
                <Col key={Activities[key].id} className="ml-auto mr-auto text-center" md="6">
                
              <Card >
             
              {Activities[key].src?<div>
                <Row>
                <Col className="ml-auto"  xs={6} > <img src={Activities[key].src[0]}  /></Col>
                
                <Col className="ml-auto" xs={6}><img src={Activities[key].src[1]} /></Col>
                </Row>
                <Col className="ml-auto"><img src={Activities[key].src[2]} /></Col></div>:null}
              
                 
                  
                
                
                <Label>Title</Label>
                <Input name="Baslik" value={Activities[key].Baslik} onChange={(e)=>this.handleChangeUpdate(e,Activities[key].id)} ></Input>
                <CardBody>
                <Label>Summary</Label>
                <Input type="textarea" name="Aciklama" value={Activities[key].Aciklama} onChange={(e)=>this.handleChangeUpdate(e,Activities[key].id)}  ></Input>
                
                </CardBody>
                <CardFooter>
                <Button color="success" name="Guncelle" onClick={()=>this.updateActivity(Activities[key])}> Güncelle</Button>
                <Button color="danger" name="Sil" onClick={()=>this.deleteActivity(Activities[key])}> Sil</Button>
                </CardFooter>
              </Card>
              </Col> 
              ))
            }
            
           </Row>
         
          
        </div>
          
        </Container>
          </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
          <div className="section-gold">
          <Container className="text-center">
          <h2 className="title">Kurs Ekleme Ekranı</h2>
          <Row>
            {
              <Col md="6" >
              <Card>
                <CardImg src={this.state.downloadURLs} />
                <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
                  Resim ekle
                <FileUploader
                  hidden
                  accept="image/*"
                  name="image-uploader"
                  randomizeFilename
                  storageRef={firebase.storage().ref("activities")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
                </label>
                <CardHeader>
                  <Label>Title</Label>
                  <Input name="KursBaslik" value={this.state.KursBaslik} onChange={this.handleChange} ></Input>
                </CardHeader>
                <CardBody>                    
                  <Label>Summary</Label>
                  <Input type="textarea" name="KursAciklama" value={this.state.KursAciklama} onChange={this.handleChange} ></Input>
                </CardBody>
                <CardFooter>
                
                  <Label>School Education Gateway Linki</Label>
                  <Input name="KursLink" value={this.state.KursLink} onChange={this.handleChange} ></Input>
                  <Button color="success" name="Guncelle" onClick={this.addnewCourseData}> Ekle</Button>
                </CardFooter>
              </Card>
              </Col>

            }
              {
            Object.keys(Courses).map((key, index)=> (
                
                <Col md="6" key={Courses[key].id}>
                <Card>
                  <CardImg src={Courses[key].src} />
                  <CardHeader>
                    <Label>Title</Label>
                    <Input name="KursBaslik" value={Courses[key].KursBaslik} onChange={this.handleChange} ></Input>
                  </CardHeader>
                  <CardBody>                    
                    <Label>Summary</Label>
                    <Input type="textarea" name="KursAciklama" value={Courses[key].KursAciklama} onChange={this.handleChange} ></Input>
                  </CardBody>
                  <CardFooter>
                  <Button
                      className="btn-just-icon btn-black"
                      color="link"
                      href={Courses[key].KursLink}
                    >
                      
                      <i className="nc-icon nc-atom" />
                    </Button>
                    <Label>School Education Gateway Linki</Label>
                    <Input name="KursLink" value={Courses[key].KursLink} onChange={this.handleChange} ></Input>
                    <Button color="success" name="Guncelle" onClick={()=>this.updateCourse(Courses[key])}> Güncelle</Button>
                    <Button color="danger" name="Sil" onClick={()=>this.deleteCourse(Courses[key])}> Sil</Button>
                  </CardFooter>
                </Card>
                </Col>
              )) }        
              
            </Row>
            </Container>
          </div>
            
          </TabPane>
          </TabContent>
          <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="3">
          {Messages?Object.keys(Messages).map((key, index)=> (
            <Card>
              <CardHeader>{Messages[key].name}</CardHeader>
              <CardBody>{Messages[key].message}</CardBody>
              <CardFooter>{Messages[key].email}
              <Button color="danger" name="Sil" style={{float: 'right'}} onClick={()=>this.deleteActivity(Messages[key])}> Sil</Button></CardFooter>
            </Card>
          )):null}
          </TabPane>
          </TabContent>
          
          

          
          
            
            
         
      </>
    );
  }
  
}

export default AdminPage;
