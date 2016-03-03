angular.module('app')

	.controller('senatorCtrl', ['$scope', '$state', '$stateParams', 'mainService',
		function ($scope, $state, $stateParams, mainService) {

			$scope.infoBox = {
				first: "First Name",
				last: "Last Name",
				district: "District",
				phone: "Phone",
				office: "Office"
			}


			$scope.getSenators = function () {

				mainService.getSenators($stateParams.state).then(function (response) {

					$scope.senators = response;
				})

			}

			$scope.getSenators();




			$scope.states = {
				"AL": "Alabama",
				"AK": "Alaska",
				"AZ": "Arizona",
				"AR": "Arkansas",
				"CA": "California",
				"CO": "Colorado",
				"CT": "Connecticut",
				"DE": "Delaware",
				"DC": "District Of Columbia",
				"FL": "Florida",
				"GA": "Georgia",
				"HI": "Hawaii",
				"ID": "Idaho",
				"IL": "Illinois",
				"IN": "Indiana",
				"IA": "Iowa",
				"KS": "Kansas",
				"KY": "Kentucky",
				"LA": "Louisiana",
				"ME": "Maine",
				"MD": "Maryland",
				"MA": "Massachusetts",
				"MI": "Michigan",
				"MN": "Minnesota",
				"MS": "Mississippi",
				"MO": "Missouri",
				"MT": "Montana",
				"NE": "Nebraska",
				"NV": "Nevada",
				"NH": "New Hampshire",
				"NJ": "New Jersey",
				"NM": "New Mexico",
				"NY": "New York",
				"NC": "North Carolina",
				"ND": "North Dakota",
				"OH": "Ohio",
				"OK": "Oklahoma",
				"OR": "Oregon",
				"PW": "Palau",
				"PA": "Pennsylvania",
				"RI": "Rhode Island",
				"SC": "South Carolina",
				"SD": "South Dakota",
				"TN": "Tennessee",
				"TX": "Texas",
				"UT": "Utah",
				"VT": "Vermont",
				"VA": "Virginia",
				"WA": "Washington",
				"WV": "West Virginia",
				"WI": "Wisconsin",
				"WY": "Wyoming"
			}

			$scope.findValue = function () {

				for (var state in $scope.states) {



					if (state === $stateParams.state) {

						$scope.stateVal = $scope.states[state];
						$scope.key = state;
					}
				}
			}
			$scope.findValue();

			$scope.changeInfo = function (senator) {
				var senName = senator.name.split(' ');
				senator.first = senName[0];
				senator.last = senName[1];

				$scope.infoBox = {
					first: senator.first,
					last: senator.last,
					district: senator.district,
					phone: senator.phone,
					office: senator.office
				}
			}


		}])