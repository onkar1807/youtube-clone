import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import HomeScreen from './components/screens/HomeScreen'
import LoginScreen from './components/screens/loginScreen/LoginScreen'
import Sidebar from './components/sidebar/Sidebar'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import './_app.scss'
import { useSelector } from 'react-redux'
import WatchScreen from './components/screens/watchScreen/WatchScreen'
import SearchScreen from './components/screens/SearchScreen'


const Layout = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(value => !value)

    return (
        <>
            <Header handleToggleSidebar={handleSidebar} />
            <div className="app_container">
                <Sidebar
                    sidebar={sidebar}
                    handleToggleSidebar={handleSidebar}
                />
                <Container fluid className="app_main">
                    {children}
                </Container>
            </div>

        </>
    )
}

const App = () => {

    const { accessToken, loading } = useSelector(state => state.auth);
    const history = useHistory();

    // useEffect(() => {
    //     if (!loading && !accessToken) {
    //         history.push('/auth')
    //     }
    // }, [accessToken, loading, history])

    return (
        <Switch>
            <Route exact path="/">
                <Layout>
                    <HomeScreen />
                </Layout>
            </Route>

            <Route exact path="/auth">
                <LoginScreen />
            </Route>

            <Route path="/search/:query">
                <Layout>
                    <SearchScreen />
                </Layout>
            </Route>

            <Route path="/watch/:id">
                <Layout>
                    <WatchScreen />
                </Layout>
            </Route>

            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>

    )
}

export default App
