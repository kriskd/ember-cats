<?php 
App::uses('AppModel', 'Model');
App::uses('ArraySource', 'Datasources.Model/Datasource');
App::uses('ConnectionManager', 'Model');

// Add new db config
ConnectionManager::create('person', array('datasource' => 'Datasources.ArraySource'));


class Person extends AppModel {
    
   /**
    * Database Configuration
    *
    * @var string
    */
    public $useDbConfig = 'person';
    
    public $useTable = false;
    
    public $fields = array(
        'id' => array('type' => 'integer', 'key' => 'primary'),
        'name' => array('type' => 'string', 'null' => false)
    );

    public $records = [
            [
                'id' => 1,
                'name' => 'Kris',
                'cats' => [
                    3,4,5,6
                ],
            ],[
                'id' => 2,
                'name' => 'Peter',
                'cats' => [
                    1,2
                ],
            ],
        ];
}
