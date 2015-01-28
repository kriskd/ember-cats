<?php
App::uses('AppController', 'Controller');

class CatsController extends AppController {

    public function index() {
        $this->response->header(array(
            'Access-Control-Allow-Origin: *',
        ));

        $cats = $this->Cat->find('all');
        $this->set('cats', $cats);
        $this->set('_serialize', array('cats'));
    }
}
