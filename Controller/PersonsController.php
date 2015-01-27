<?php
App::uses('AppController', 'Controller');

class PersonsController extends AppController {

    public function index() {
        $this->response->header(array(
            'Access-Control-Allow-Origin: *',
        ));
        $persons = $this->Person->find('all'); 
        $this->set('persons', $persons);
        $this->set('_serialize', array('persons'));
    }
}

