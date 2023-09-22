const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agendas: [],
			currentAgenda: 'Barbosas',
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadAgendas: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda')
					.then(res => res.json())
					.then(data => setStore({ "agendas": data }))
			},
			loadContacts: (agenda) => {

				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${agenda}`)
					.then(res => res.json())
					.then(data => setStore({ "contacts": data, currentAgenda: agenda }))


			},
			deleteContact: (id) => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE"
				})


					.then(res => res.json())
					.then(data => getActions().loadContacts(store.currentAgenda))


			},
			newContact: (fullname, address, mail, phone) => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/apis/fake/contact/`, {
					method: "POST",
					body: JSON.stringify({ "full_name": fullname, "email": mail, "agenda_slug": store.currentAgenda, "address": address, "phone": phone  }),
					headers:
					{
						'Content-Type': 'application/json'
					}
					

				})
			
			.then(res => res.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));

			},
			updateContact: (fullname, address, mail, phone, id) => {
				
				const store = getStore();
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "PUT",
					body: JSON.stringify({ "full_name": fullname, "email": mail, "agenda_slug": store.currentAgenda, "address": address, "phone": phone }),
					headers:
					{
						'Content-Type': 'application/json'
					}
					

				})
				.then(res => res.json())
				.then(response => console.log(response))
				.catch(err => console.error(err));
			},
		}
	}
};


export default getState;
