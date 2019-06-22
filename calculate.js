
module.exports = {
	calculate: function(req, res) {
		const type = req.query.type
		const weight = Number(req.query.weight)
		var mail
		let cost = 0;
		
		if (type == "lS") {
			mail = 'Letter (Stamped)'
			if (weight =< 1)
				cost = .55
			else if (weight =< 2)
				cost = .70
			else if (weight =< 3)
				cost = .85
			else if (weight =< 3.5)
				cost = 1
		}
		else if (type == "lM") {
			mail = 'Letter (Metered)'
			if (weight =< 1)
				cost = .50
			else if (weight =< 2)
				cost = .65
			else if (weight =< 3)
				cost = .80
			else if (weight =< 3.5)
				cost = .95
		}
		else if (type == "lE") {
			mail = 'Large Envelopes (Flats)'
			if (weight =< 1)
				cost = 1
			else if (weight =< 2)
				cost = 1.15
			else if (weight =< 3)
				cost = 1.3
			else if (weight =< 4)
				cost = 1.45
			else if (weight =< 5)
				cost = 1.6
			else if (weight =< 6)
				cost = 1.75
			else if (weight =< 7)
				cost = 1.9
			else if (weight =< 8)
				cost = 2.05
			else if (weight =< 9)
				cost = 2.2
			else if (weight =< 10)
				cost = 2.35
			else if (weight =< 11)
				cost = 2.5
			else if (weight =< 12)
				cost = 2.65
			else if (weight =< 13)
				cost = 2.8
		}
		
		else if (type == "fC") {
			mail = 'First-Class Package Service-Retail'
			if (weight =< 1)
				cost = 3.66
			else if (weight =< 2)
				cost = 3.66
			else if (weight =< 3)
				cost = 3.66
			else if (weight =< 4)
				cost = 3.66
			else if (weight =< 5)
				cost = 4.39
			else if (weight =< 6)
				cost = 4.39
			else if (weight =< 7)
				cost = 4.39
			else if (weight =< 8)
				cost = 4.39
			else if (weight =< 9)
				cost = 5.19
			else if (weight =< 10)
				cost = 5.19
			else if (weight =< 11)
				cost = 5.19
			else if (weight =< 12)
				cost = 5.19
			else if (weight =< 13)
				cost = 5.71
		}
		
		total = cost.toFixed(2);
		
		const params = {mail: mail, total: total, weight: weight}
		
		res.render('pages/result', params);
	}
}
		
		
			
		
		