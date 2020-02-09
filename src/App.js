import React from 'react';
import './App.css';

/* Material UI Components */
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* From components folder */
import Nav from './components/Nav';

const app_name = "Radio Shopper"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Nav title={app_name} >

        <Typography paragraph>
          Testing
        </Typography>

        <Typography paragraph>


          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at nisl in ipsum condimentum porta nec et massa. Etiam ut odio pulvinar, commodo elit at, vestibulum nulla. Cras vitae quam interdum, molestie nunc nec, viverra dui. Nullam eget arcu aliquet, porttitor lacus vitae, interdum mauris. Duis efficitur leo sit amet maximus ultricies. Proin a nisi ut ex lacinia tristique non sit amet velit. Aenean mattis purus quis est vehicula lacinia. Curabitur id congue quam. Nulla eget nibh ullamcorper, ullamcorper lorem sit amet, ullamcorper libero. Donec aliquet odio massa, ut placerat sem facilisis ac. Vestibulum vehicula dui a felis tempor placerat. Fusce vitae arcu scelerisque, maximus sapien ac, tristique est.
          
          Fusce ut laoreet est, in vestibulum mauris. Nulla non mi cursus, pharetra risus eget, porttitor enim. Sed sed lacus sagittis, fringilla mi id, mollis tellus. Fusce elementum laoreet risus et posuere. Aliquam ultrices tristique egestas. Etiam et urna sed lorem porttitor vulputate at et sem. Quisque sed enim mauris. Aenean ac tortor pulvinar, mollis lectus ac, laoreet lectus. Aliquam mattis rutrum massa.
          
          Sed in dui risus. Fusce sit amet hendrerit elit. Suspendisse dignissim urna nec molestie fermentum. Quisque vulputate non elit non pharetra. Ut faucibus lacus ac venenatis iaculis. Donec et nunc nibh. Sed mauris enim, volutpat iaculis porttitor vitae, gravida at elit. Aliquam tortor massa, sodales sed lorem ac, iaculis feugiat ex. Phasellus ornare, magna in viverra mollis, erat purus venenatis dolor, non vestibulum justo felis in ipsum. Curabitur elementum massa eget sem faucibus porttitor. Vivamus in metus et lectus ullamcorper elementum. Integer accumsan iaculis turpis. Nam risus ex, scelerisque ac aliquet sit amet, ullamcorper vel tortor. Maecenas consectetur dolor lacinia neque egestas, eu convallis odio sollicitudin.
          
          Vivamus fringilla, tortor nec dapibus tristique, mauris eros semper nulla, ut commodo augue elit commodo elit. Maecenas hendrerit risus sollicitudin tristique tincidunt. Donec molestie maximus sapien, vitae pulvinar eros pretium sed. Curabitur ornare vulputate porttitor. Donec vitae ante turpis. Suspendisse posuere metus in risus egestas condimentum. Suspendisse fringilla, risus sed dictum hendrerit, quam est volutpat ante, sed semper mauris purus ultrices neque. Maecenas scelerisque velit vel euismod sollicitudin. Donec in justo in mi convallis porta at et risus. Vivamus sem dui, fermentum in molestie sit amet, tempus ut libero. Maecenas rhoncus risus sed augue consectetur, sed eleifend lacus blandit. Praesent blandit ullamcorper ultrices. Sed rutrum, arcu vehicula cursus imperdiet, orci sapien congue nibh, sed commodo risus ipsum ut velit. Praesent cursus vel dolor vel porta. Aenean a luctus lacus.
          
          Maecenas at lacus dolor. Ut velit purus, suscipit eget diam at, fringilla lacinia velit. In tortor ante, semper sit amet volutpat a, dapibus a metus. Vestibulum interdum luctus dui, eu dignissim velit dictum in. Sed cursus dictum vehicula. Mauris semper lacus mi, vitae lobortis lectus pretium eget. Nam laoreet blandit scelerisque. Curabitur nisi sapien, lacinia ac mi a, malesuada porttitor nisl. Quisque et nulla in quam vehicula scelerisque. Pellentesque quis sollicitudin mi, non egestas magna. Integer vitae cursus lectus. Etiam ex sem, dignissim ut ornare ac, viverra nec turpis.
          
          Vestibulum non dignissim quam. Ut varius fringilla nunc vitae vulputate. Phasellus purus metus, commodo non arcu a, laoreet sollicitudin massa. Mauris dictum ligula eget varius egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum risus dolor, mattis suscipit sapien auctor ut. Nulla bibendum eros at venenatis placerat. Donec efficitur urna ut dolor finibus, et placerat quam suscipit. Ut ex purus, pharetra nec laoreet sed, aliquam quis neque. Sed a finibus est. Aenean felis enim, luctus vitae porttitor quis, tempor non libero. Nam et ex nibh. Nam feugiat orci nec augue scelerisque interdum.
          
          Sed convallis metus id erat elementum, eget blandit tellus tristique. Aenean pretium lectus in sapien bibendum, ac sollicitudin est tincidunt. Vivamus malesuada nec arcu eu ornare. Quisque ut sollicitudin mauris, sit amet blandit lacus. Cras auctor mauris sit amet risus accumsan sollicitudin. Suspendisse scelerisque tortor enim, vitae malesuada lorem sodales a. Duis gravida dictum tortor, in blandit tortor aliquam at. Phasellus nec arcu dui. Aenean ex sem, tempus nec risus et, eleifend vestibulum urna. Aenean in quam a lectus pharetra finibus sit amet a tellus. Etiam orci eros, posuere ac ornare eget, finibus ac dui. Fusce scelerisque velit eu nisi vulputate interdum.
          
          Vivamus vehicula sapien gravida ante feugiat, eget pretium metus eleifend. Curabitur purus ante, tincidunt quis gravida eu, placerat facilisis ex. Donec purus ex, cursus sit amet lacinia sed, maximus vel tellus. In sollicitudin sollicitudin nulla, a convallis nisl maximus sit amet. Cras laoreet velit vel nibh tempus vestibulum. Sed ac dignissim enim. Integer non elementum purus, sit amet volutpat tortor. Aliquam at accumsan purus, id mollis nulla. Aenean sed libero luctus velit ultrices pellentesque. Duis auctor sem sit amet dui molestie, nec mollis libero pulvinar. In vitae aliquet tortor, quis varius ante. Nam scelerisque tempus faucibus. Quisque euismod efficitur cursus. Aenean quis odio sed ligula finibus sagittis ac quis lacus.
          
          Maecenas sollicitudin ullamcorper nulla, eu vehicula turpis interdum ut. Duis egestas quis urna nec gravida. Nullam volutpat mauris et nibh eleifend, vel semper risus condimentum. Fusce quis efficitur eros. Nunc vestibulum tortor dapibus, vulputate lectus eu, eleifend elit. Phasellus est sem, porta non est eget, sollicitudin faucibus libero. Vestibulum pretium orci nibh, id consectetur nunc rhoncus ac. Integer pretium odio non massa suscipit, vel congue felis finibus. Vestibulum a luctus arcu, a rutrum ante. Vivamus eget nunc ac ante malesuada imperdiet. Integer suscipit dui enim, quis volutpat erat elementum ac. Aenean efficitur lorem massa, ultricies lobortis ante vulputate quis.
          
          Praesent eleifend ligula massa, sed vehicula augue tincidunt a. Mauris eu dolor vel purus ornare elementum eget vel leo. Proin vel ipsum sed nunc tincidunt gravida. Nullam eget nisi bibendum, finibus diam vitae, feugiat felis. Vivamus at nulla facilisis, facilisis nibh vestibulum, aliquet ipsum. Duis sollicitudin ligula sed turpis faucibus, sed aliquam orci commodo. Duis eget ante eros. Nam quis rutrum diam, vel feugiat nibh.
          
          Vivamus mollis et lacus ut aliquam. Cras sed congue elit. Proin lobortis, sem id sagittis vehicula, justo velit cursus mi, viverra pretium urna massa at dui. Phasellus luctus eu erat id accumsan. Donec et tempus sapien, sit amet convallis augue. Morbi iaculis leo id blandit euismod. Morbi facilisis, libero vitae vestibulum placerat, massa libero ultrices lacus, eu mattis velit massa sit amet leo. Donec sed tempor ipsum. Nam feugiat vehicula diam, at malesuada tortor consequat id. Morbi vestibulum condimentum justo, vel scelerisque ante consectetur id. Etiam accumsan libero sed finibus lobortis.
          
          Vestibulum eu dui vel tellus ullamcorper malesuada ac vel urna. Cras at feugiat justo. Nullam nulla dui, pretium a molestie eu, viverra vel libero. Cras non elit finibus, elementum magna sed, bibendum ante. Etiam in lectus aliquet, iaculis felis at, pretium sem. Ut laoreet, nisl a molestie efficitur, sem neque pulvinar ante, vel tempor lorem nisl vel lectus. Integer eget leo ac erat facilisis tincidunt. Cras accumsan lacus quis felis lacinia elementum. Donec erat magna, ornare eu vestibulum vel, egestas in dolor. Mauris nisl leo, elementum id posuere eget, scelerisque et ante. Nulla at tellus non ligula pretium egestas nec pellentesque lorem.
          
          Vestibulum interdum pulvinar magna, a finibus diam dapibus id. Proin lobortis efficitur massa, et dictum erat tempor non. Donec rutrum mauris mauris, eget scelerisque neque malesuada ac. In eu orci metus. Quisque vulputate quis tellus nec convallis. Maecenas mollis egestas ipsum eu cursus. Donec molestie sem mollis, suscipit ante vitae, accumsan nunc. Maecenas euismod, lorem vel condimentum molestie, dolor lacus euismod erat, a lacinia est enim non leo. Aliquam eget risus vitae sem fringilla faucibus sed ac risus. Etiam quis tristique diam. Maecenas ipsum felis, vestibulum ut nibh quis, consectetur faucibus ante. Donec in orci a justo facilisis ultrices. Sed feugiat, orci nec lobortis venenatis, lectus dolor tempor turpis, et scelerisque urna felis ut metus. Donec euismod tincidunt odio, vel venenatis ligula.
          
          Aenean iaculis velit at ornare imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque congue venenatis. Phasellus id erat hendrerit dui mattis accumsan. In efficitur feugiat dui, varius maximus felis blandit ut. Vivamus sagittis leo enim, vitae commodo ex condimentum eu. In placerat malesuada ipsum, non lacinia urna facilisis ut. Fusce enim mauris, scelerisque sed libero ac, lacinia feugiat mi.
          
          Integer a lectus fermentum, vulputate nunc vel, tincidunt neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eleifend augue at augue congue, quis sagittis mi accumsan. Sed scelerisque lorem eu sapien porta ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ullamcorper eu libero in elementum. Mauris porttitor nibh a dui sodales ultrices. In scelerisque accumsan nisl, non varius ipsum eleifend vitae. Donec ac quam eget massa dapibus auctor. Ut in libero at erat congue lobortis. Nulla facilisi. Quisque quam metus, malesuada sit amet feugiat id, ullamcorper sit amet diam. Aenean eget odio nec nunc interdum lacinia vitae eget purus.
          
          Proin eleifend pellentesque turpis eget hendrerit. Etiam non enim ex. Integer vulputate magna non orci hendrerit sodales. Vestibulum iaculis orci et arcu fringilla, vitae scelerisque risus imperdiet. In dictum mollis lectus at ultrices. Aliquam et ligula ut nisi ornare vulputate a et erat. Suspendisse id fringilla odio. Integer porta interdum tellus et viverra.
          
          Proin rutrum ligula lacus, pulvinar bibendum erat luctus a. Sed condimentum, justo nec ullamcorper vehicula, eros nisl iaculis justo, ac commodo urna sem quis purus. Curabitur enim eros, tristique vel nisl vel, faucibus lacinia erat. Ut consequat ullamcorper tortor, at fringilla nibh rhoncus non. Donec at purus felis. Ut sit amet odio tincidunt, elementum metus sed, faucibus magna. Sed laoreet urna vel ex blandit iaculis.
          
          Proin volutpat, tellus tempor pretium condimentum, sem enim malesuada diam, nec sodales sem ligula ac eros. Suspendisse vulputate, felis sed sodales gravida, diam velit suscipit neque, sagittis eleifend tellus velit nec est. Sed cursus ullamcorper mauris sed consectetur. Vivamus id convallis tellus, id laoreet purus. Integer ut arcu id mi ullamcorper condimentum. Sed vehicula aliquet bibendum. Quisque sagittis neque nec ex maximus, eget dapibus neque vehicula. Phasellus sed ante varius, tincidunt ex nec, pretium elit. Vestibulum quam magna, convallis nec gravida quis, viverra quis urna. Donec dignissim ornare hendrerit.
          
          Nunc ac posuere ex. Etiam sed sem lobortis, eleifend tellus eu, tempor dolor. Donec vel nisl justo. Praesent fringilla velit erat, at convallis augue dictum id. Duis ac odio quis lacus pharetra condimentum. Etiam mollis euismod commodo. Fusce pretium tincidunt porta. Duis at interdum nibh. Etiam nunc leo, efficitur id nunc vitae, euismod dignissim elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed turpis risus, elementum nec feugiat non, vestibulum et nisl. Etiam mattis lorem arcu, et tincidunt velit porta ut. Suspendisse diam libero, eleifend eu molestie vel, egestas nec ipsum. Phasellus blandit, magna id tincidunt ultricies, est ex mattis libero, sit amet porta metus augue in ex. Donec ut mattis orci.
          
          In in egestas lectus. Etiam a iaculis felis, id pretium turpis. Pellentesque scelerisque dictum dignissim. Nunc nulla lacus, congue quis nunc a, aliquam sagittis dui. Maecenas tincidunt risus velit, in venenatis justo consequat nec. Nam fringilla vulputate quam, sit amet tristique velit bibendum vel. Nunc vitae diam eu tellus posuere sagittis. Ut commodo porttitor elit, non gravida arcu auctor non. Duis ut risus quis dolor accumsan efficitur. Morbi ex nisi, vulputate quis diam id, commodo luctus mauris. Morbi vel libero sodales, pharetra nisl in, viverra massa. In hac habitasse platea dictumst. Vivamus consectetur quam metus, a consectetur arcu molestie vitae.
        </Typography>

        <Button variant="contained" color="primary">
          Hello World
        </Button>

      </Nav>
    </React.Fragment>
  );
}

export default App;
