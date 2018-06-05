import userPath from '../router/fullpath'
function RoutingMatching (role) {
	var addrouter = []
	for (var i = 0;i < role.length; i++) {	
    	for (var key in userPath) {
    		if (key === role[i]) {
    			addrouter.push(userPath[key]) 
    		}
    	}
   	}
    return addrouter
}
export default RoutingMatching