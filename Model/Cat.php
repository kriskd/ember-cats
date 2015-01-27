<?php 
App::uses('AppModel', 'Model');
App::uses('ArraySource', 'Datasources.Model/Datasource');
App::uses('ConnectionManager', 'Model');

// Add new db config
ConnectionManager::create('cat', array('datasource' => 'Datasources.ArraySource'));

class Cat extends AppModel {

   /**
    * Database Configuration
    *
    * @var string
    */
    public $useDbConfig = 'cat';
    
    public $useTable = false;
    
    public $fields = array(
        'id' => array('type' => 'integer', 'key' => 'primary'),
        'name' => array('type' => 'string', 'null' => false)
    );

    public $records = [
            [
                'id' => 1,
                'name' => 'Casper', 
            ],[
                'id' => 2,
                'name' => 'Tux', 
            ],[
                'id' => 3,
                'name' => 'Domino', 
            ],[
                'id' => 4,
                'name' => 'Neo', 
            ],[
                'id' => 5,
                'name' => 'Wynn', 
            ],[
                'id' => 6,
                'name' => 'Sadie',
            ],
        ];

}
