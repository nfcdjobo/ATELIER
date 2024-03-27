import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import './style.js';
import { dashboardStyle } from './style.js';
import { FakeActivity } from '../../FakeDatas/fakeActivity.js';


// On import un fichier png
import JOB from '../../assets/svg/job.png';
import COIFFURE from '../../assets/svg/coiffure.png';
import SHOPPING from '../../assets/svg/Shopping.png';
import ActivityItems from '../../composants/ActivityItems';
import ClientsItems from '../../composants/clientsItems';
import { FakeClients } from '../../FakeDatas/fakeClients.js';
import styleClients from '../../composants/clientsItems/style.js';
import { FakeImages } from '../../FakeDatas/fakeImages.js';



const Home = () => {
  return (
    
    // Le composant scrollview nous permet de scroller
    <ScrollView>
        {/* Debut de header */}
        <View style={dashboardStyle.header}>
            <Text style={dashboardStyle.userName}>DJOBO Carêm</Text>
            <Image source={require('../../assets/Font/user.jpg')} style={dashboardStyle.userImage}/>
        </View>
        {/* Fin de header */}


        {/* Liste des clients */}
        {/* <Text>ghghhg</Text> */}
        <FlatList 
            data={FakeActivity}
            keyExtractor={item=>item.id}
            
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={dashboardStyle.scrollabList}
            renderItem={({item})=> {
                return(
                    // Ici remplaçons le composant View par le composant TouchableOpacity qui permet de signaler le click
                    <ActivityItems item={item}/>
                )
            }}
        />

        <View style={dashboardStyle.titleClient}>
            <Text style={dashboardStyle.titleContent}>Liste des clients</Text>
        </View>
        
        <FlatList 
            data={FakeClients}
            keyExtractor={item=>item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={dashboardStyle.scrollabList}
            renderItem={({item})=> {
                return(
                    // Ici remplaçons le composant View par le composant TouchableOpacity qui permet de signaler le click
                    <ClientsItems item={item}/>
                    // <ActivityItems />
                )
            }}
        />


        <View style={dashboardStyle.text_space_betwen}>
            <Text style={dashboardStyle.titleBold}>Clients</Text>
            <TouchableOpacity>
                <Text style={dashboardStyle.link}>Afficher tout</Text>
            </TouchableOpacity>
        </View>

        <View style={dashboardStyle.docorClient}>
            {
                FakeImages.slice(0,6).map((item, indece) =>{
                    return(
                        <TouchableOpacity key={item.id} style={dashboardStyle.clientsCard}>
                            <Image style={dashboardStyle.clientsImage} source={{ uri:`${item.image}`}} />
                            <View>
                                <Text style={dashboardStyle.clientName}>{item.fullname}</Text>
                                <View style={dashboardStyle.phoneAndGenre}>
                                    <Text style={dashboardStyle.clientPhone}>{item.telephone}</Text>
                                    <Text style={dashboardStyle.clientGenre}>{item.genre}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>

        {/* Fin de liste des clients */}
    </ScrollView>
  )
}

export default Home;


