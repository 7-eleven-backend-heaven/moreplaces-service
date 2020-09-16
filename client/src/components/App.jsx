/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MorePlaces from './morePlaces.jsx';

const path = window.location.pathname.split('/');
const propertyId = path[2];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      property: [],
    };

    this.setProperties = this.setProperties.bind(this);
    this.getProperties = this.getProperties.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.getProperty = this.getProperty.bind(this);
  }

  componentDidMount() {
    this.getProperty();
  }

  getProperties() {
    axios.get('/test-seeder')
      .then(this.setProperties)
      .catch(console.log);
  }

  setProperties(properties) {
    this.setState({ properties: properties.data });
  }

  getProperty() {
    axios.get(`/property/${propertyId}`)
      .then(this.setProperty)
      .catch(console.log);
  }

  setProperty(property) {
    this.setState({ property: property.data });
  }

  render() {
    return (
      <div>
        <Header>More places to stay </Header>
        <Wrapper>
          <MorePlaces places={this.state.property} />
        </Wrapper>
      </div>
    );
  }
}
const Header = styled.h2`
  font-weight: 100px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default App;
