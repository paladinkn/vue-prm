import handle from './handle';

handle.use('/pals', function(resp) {
	return {'pal':'palssss'};
})
