import logo from './logo.svg';
import './App.css';
import { View } from './view';
import { TaskContainer } from './tasksContainer';
import { HomePage } from './homepage';
import { HomepageContainer } from './homepageContainer';
import { Stack } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
function App() {
  return (
    <Stack sx={{textAlign:"center", fontFamily:'lora'}} direction="row" flexGrow={1} >
   {/* <View /> */}
   <HomepageContainer xs={6} width="50%" />
   <TaskContainer xs={6} width="50%" />
    </Stack>
  );
}

export default App;
