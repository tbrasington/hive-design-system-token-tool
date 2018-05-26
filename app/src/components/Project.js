import React, {Component} from 'react'
import styled from 'styled-components'
import {layout_marginTop, layout_marginLeft, layout_marginRight, typeStyles, colours, spacing } from '../DesignSystem'
import {ProjectContext} from '../ProjectContext';

import Action from './Action'
import BackButton from './BackButton'

class Project extends Component {
   
    getTokens(tokenData) {
        let tokenList = [];
        
        Object.entries(tokenData).forEach(([key, token]) => {
            tokenList.push (<ListItem key={String(key)} onClick={this.goToStyle(token)}>{token.name}</ListItem>)
        });

        return tokenList;
    }

    goToStyle(tokenData){
        // function on app
        //this.
    }

    render() {
        const {projectOpen,projectData,closeProject } = this.props;

        console.log(projectData);
        
        return ( 
          <Container>
            <Heading>{projectData.name}</Heading>
            <BackButton clickEvent={()=> { this.props.history.push('/'); closeProject(); }}/>
            <Actions>
                <List>{projectData.tokens && this.getTokens(projectData.tokens)}</List>
                <Action>Add Token</Action>
                <Action showRule={false}>Render</Action>
            </Actions>

          </Container>
        )
    }
}


export default props => (
  <ProjectContext.Consumer>
     {({ closeProject,projectData,projectOpen}) => ( <Project {...props} closeProject={closeProject} projectData={projectData} projectOpen={projectOpen}   /> )}
  </ProjectContext.Consumer>
);

const Container = styled.div`
padding-top: ${layout_marginTop}px;
padding-left: ${layout_marginLeft}px;
padding-right: ${layout_marginRight}px;
width:100%;
`

const Heading = styled.div`
${typeStyles.label1};
color:${colours.lightGrey};
`

const Actions = styled.div`
padding-top:${spacing*2}px;
`
const List = styled.ul`
list-style:none;
padding:0;
margin:0 0 ${spacing*3}px 0;
`
const ListItem = styled.li `
${typeStyles.label1};
color:${colours.midGrey};
padding:0 0 ${spacing}px 0;
margin:0 0 ${spacing}px 0;
`
Project.defaultProps = {
    sectionTitle : 'Project Title'
}