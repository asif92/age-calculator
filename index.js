var helper = require('./lib/helper');

module.exports = {
	fullAge: function(dateString)
	{
		/* check if input date is in correct form */
		var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
		if(!(date_regex.test(dateString)))
		{
			return "Input Date isn't correct.";
		}
		var todayDate = helper.getTodayDate();
		
		/* check if input date is in future or today */
		if (new Date(dateString) > new Date(todayDate))
		{
			return "Sorry! Input date is in future. " + '\n' + "Could not calculate age!";
		}
		else if (dateString == todayDate)
		{
			return "Sorry! Input date is today. " + '\n' + "Could not calculate age!";
		}
		else
		{
			// var today = new Date(now.getYear(),now.getMonth(),now.getDate());
			/* Today Date */
			var now = new Date();
			var yearNow = now.getYear();
			var monthNow = now.getMonth();
			var dateNow = now.getDate();

			/* Date-of-Birth */
			var dob = new Date(dateString.substring(6,10), dateString.substring(0,2)-1, dateString.substring(3,5));
			var yearDob = dob.getYear();
			var monthDob = dob.getMonth();
			var dateDob = dob.getDate();

			/* Output */
			var age = {};
			var ageString = "";
			var yearString = "";
			var monthString = "";
			var dayString = "";

			/* Get Age Year */
			yearAge = yearNow - yearDob;

			/* Get Age Month*/
			if (monthNow >= monthDob)
			{
				var monthAge = monthNow - monthDob;
			}
			else
			{
				yearAge--;
				var monthAge = 12 + monthNow -monthDob;
			}

			/* Get Age Date*/
			if (dateNow >= dateDob)
			{
				var dateAge = dateNow - dateDob;
			}
			else {
				monthAge--;
				var dateAge = 31 + dateNow - dateDob;
				if (monthAge < 0)
				{
					monthAge = 11;
					yearAge--;
				}
			}

			/* Age Object with year,month,date */
			age = {
				years: yearAge,
				months: monthAge,
				days: dateAge
			};

			/* Storing year, month and date strings */
			if ( age.years > 1 ) yearString = " years";
			else yearString = " year";
			if ( age.months > 1 ) monthString = " months";
			else monthString = " month";
			if ( age.days > 1 ) dayString = " days";
			else dayString = " day";

			/* Final ageString Creation */
			if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
				ageString = age.years + yearString  + " " + age.months + monthString  + " " + age.days + dayString;
			else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
				ageString = "Only " + age.days + dayString + " old!";
			else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
				ageString = age.years + yearString;
			else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
				ageString = age.years + yearString + " and " + age.months + monthString;
			else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
				ageString = age.months + monthString + " and " + age.days + dayString;
			else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
				ageString = age.years + yearString + " and " + age.days + dayString;
			else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
				ageString = age.months + monthString;
			else ageString = "Oops! Could not calculate age!";
			return ageString;
		}
	},

	inMonths: function(dateString)
	{
		var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
		if(!(date_regex.test(dateString)))
		{
			return "Input Date isn't correct.";
		}
		var todayDate = helper.getTodayDate();
		var ageString = "";
		var tempAgeString = "";

		if (new Date(dateString) > new Date(todayDate))
		{
			return "Sorry! Input date is in future. " + '\n' + "Could not calculate age!";
		}
		else if (dateString == todayDate)
		{
			return "Sorry! Input date is today. " + '\n' + "Could not calculate age!";
		}
		else
		{
			tempAgeString = this.fullAge(dateString);
			if ( (tempAgeString.includes('year') ) )
			{
				if ( (tempAgeString.includes('month') ) )
				{
					if ( (tempAgeString.includes('day') ) )
					{
						var tempArr = tempAgeString.match(/^\d+|\d+\b|\d+(?=\w)/g);
						var tempMonth = Number(tempArr[0]*12) + Number(tempArr[1]);
						ageString = tempMonth + ' ' + 'months' + ' ' + tempArr[2] + ' ' + 'days';
						return ageString;
					}
					else
					{
						var tempArr = tempAgeString.match(/^\d+|\d+\b|\d+(?=\w)/g);
						var tempMonth = Number(tempArr[0]*12) + Number(tempArr[1]);
						ageString = tempMonth + ' ' + 'months';
						return ageString;
					}
				}
				else
				{
					var tempArr = tempAgeString.match(/^\d+|\d+\b|\d+(?=\w)/g);
					var tempMonth = Number(tempArr[0]*12);
					ageString = tempMonth + ' ' + 'months';
					return ageString;
				}
			}
			else if ( (tempAgeString.includes('month') ) )
			{
				if ( (tempAgeString.includes('day') ) )
				{
					var tempArr = tempAgeString.match(/^\d+|\d+\b|\d+(?=\w)/g);
					if ( tempArr[0] > 1 )
					{
						if ( tempArr[1] > 1 )
						{
							ageString = tempArr[0] + ' ' + 'months and' + ' ' + tempArr[1] + ' ' + 'days';
						}
						else
						{
							ageString = tempArr[0] + ' ' + 'months and' + ' ' + tempArr[1] + ' ' + 'day';
						}
					}
					else
					{
						if ( tempArr[1] > 1 )
						{
							ageString = tempArr[0] + ' ' + 'month and' + ' ' + tempArr[1] + ' ' + 'days';
						}
						else
						{
							ageString = tempArr[0] + ' ' + 'month and' + ' ' + tempArr[1] + ' ' + 'day';
						}
					}
					return ageString;
				}
				else
				{
					var tempArr = tempAgeString.match(/^\d+|\d+\b|\d+(?=\w)/g);
					if ( tempArr[0] > 1 )
					{
						ageString = tempArr[0] + ' ' + 'months';
					}
					else
					{
						ageString = tempArr[0] + ' ' + 'month';
					}
					return ageString;
				}
			}
			else if ( (tempAgeString.includes('day') ) )
			{
				var tempArr = tempAgeString.match(/^\d+|\d+\b|\d+(?=\w)/g);
				if ( tempArr[0] > 1 )
				{
					ageString = 'Only' + ' ' + tempArr[0] + ' ' + 'days old!';
				}
				else
				{
					ageString = 'Only' + ' ' + tempArr[0] + ' ' + 'day old!';
				}
				return ageString;
			}
			else
			{
				return 'no condition found';
			}
		}
	},
	inDays: function(dateString)
	{
		var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
		if(!(date_regex.test(dateString)))
		{
			return "Input Date isn't correct.";
		}
		var today = helper.getTodayDate();
		if (new Date(dateString) > new Date(today))
		{
			return "Sorry! Input date is in future. " + '\n' + "Could not calculate age!";
		}
		else if (dateString == today)
		{
			return "Sorry! Input date is today. " + '\n' + "Could not calculate age!";
		}
		else
		{
			var inputDate = new Date(dateString);
			today = new Date(today);
			var timeDiff = Math.abs(today.getTime() - inputDate.getTime());
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
			return diffDays + ' days';
		}
	},
	inHours: function(dateString)
	{
		var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
		if(!(date_regex.test(dateString)))
		{
			return "Input Date isn't correct.";
		}
		var today = helper.getTodayDate();
		if (new Date(dateString) > new Date(today))
		{
			return "Sorry! Input date is in future. " + '\n' + "Could not calculate age!";
		}
		else if (dateString == today)
		{
			return "Sorry! Input date is today. " + '\n' + "Could not calculate age!";
		}
		else
		{
			var convertedDate = new Date(dateString);
			today = new Date(today);
			var timeDiff = Math.abs(today.getTime() - convertedDate.getTime());
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
			var hrs = diffDays * 24;
			return hrs + ' hours';
		}
	},
	inMinutes: function(dateString)
	{
		var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
		if(!(date_regex.test(dateString)))
		{
			return "Input Date isn't correct.";
		}
		var today = helper.getTodayDate();
		if (new Date(dateString) > new Date(today))
		{
			return "Sorry! Input date is in future. " + '\n' + "Could not calculate age!";
		}
		else if (dateString == today)
		{
			return "Sorry! Input date is today. " + '\n' + "Could not calculate age!";
		}
		else
		{
			var convertedDate = new Date(dateString);
			today = new Date(today);
			var timeDiff = Math.abs(today.getTime() - convertedDate.getTime());
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
			var hrs = diffDays * 24;
			var minutes = hrs * 60;
			return minutes + ' minutes';
		}
	},

	/* Age in seconds */
	inSeconds: function(dateString)
	{
		var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
		if(!(date_regex.test(dateString)))
		{
			return "Input Date isn't correct.";
		}
		var today = helper.getTodayDate();
		if (new Date(dateString) > new Date(today))
		{
			return "Sorry! Input date is in future. " + '\n' + "Could not calculate age!";
		}
		else if (dateString == today)
		{
			return "Sorry! Input date is today. " + '\n' + "Could not calculate age!";
		}
		else
		{
			var convertedDate = new Date(dateString);
			today = new Date(today);
			var timeDiff = Math.abs(today.getTime() - convertedDate.getTime());
			var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
			var hrs = diffDays * 24;
			var minutes = hrs * 60;
			var seconds = minutes * 60;
			return seconds + ' seconds';
		}
	}
};
