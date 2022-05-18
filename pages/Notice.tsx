import React from 'react'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import Footer from './components/Footer'
import ShowModal from './components/ShowModal'
import ReactLoading from 'react-loading'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function Notice() {
  const { data, error } = useSWR('../api/DB', fetcher)

  if (error) {
    return (
      <div>error</div>
    )
  }

  if (!data) {
    return (
      <div>
        <ReactLoading type={'bars'} width={'10%'} className='loadingBar' /> <br/>
        <div className='loadingMessage'>Loading ...</div>
      </div>
    )
  } 
  else {
    console.log(data)
    return (
      <div key={1}>
        <Footer />
        {Object.values(data.notice).map((log: any) => (
          
          <Card className='cards' sx={{ maxWidth: 500, borderRadius: '7px'}}>
            <CardActionArea>
              <UsedImg value={log.Image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {log.Category}
                </Typography>
                <Typography variant="body1">
                  {log.Contents}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {log.Date}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className='link-Buttion-Position'>
              <UsedLink value={log.Link}/>
            </CardActions>
          </Card>
        ))}
        <div className='space-100px'/>
      </div>
    )
  }
}
function UsedLink({ value }: { value: string }){
  if(!value){
    return null
  }
  else{
    return(
      <div>
        <ShowModal value={value} />
      </div>
    )
  }
}
function UsedImg({ value }: { value: string }){
  // console.log(props)
  let heightSet="160"
  if(value){
    // 데이터에 이미지가 있으면 출력되게 
    return(
      <div
        onMouseEnter={() =>  heightSet="auto"}
        onMouseLeave={() =>  heightSet="160"}
        //감지를 못함 이거 해결해야함
      >
        <CardMedia
          component="img"
          height={heightSet}
          src={value}
        />
        
      </div>
    )
  }
  else{
    return(
      <div className='animation-bar'>
        <ul className="img-animation">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}