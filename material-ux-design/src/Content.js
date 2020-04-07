import React from 'react';
import AppCard from './AppCard';
import { Grid } from "@material-ui/core";


const Content =()=>{
    return (
      <Grid container spacing={2} style={{ padding: 20 }}>
        <Grid item xs={12} sm={6}>
          <AppCard
            avatarSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg"
            name="Friedrich Nietzsche"
            title="Thus Spoke Zarathustra"
            subTitle="Oct 1844 - Aug 1900"
            description="A philosophical novel that deals with ideas such as the 'eternal recurrence of the same', the parable on the 'death of God', and the 'prophecy' of the Übermensch."
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppCard
            avatarSrc="https://upload.wikimedia.org/wikipedia/commons/d/d5/Ralph_Waldo_Emerson_ca1857_retouched.jpg"
            name="Ralph Waldo Emerson"
            title="Self-Reliance"
            subTitle="May 1803 - April 1882"
            description="American essayist, lecturer, philosopher and poet who led the transcendentalist movement of the mid-19th century. He was seen as a champion of individualism and"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/d/d5/Ralph_Waldo_Emerson_ca1857_retouched.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AppCard />
        </Grid>
      </Grid>
    );
}

export default Content;