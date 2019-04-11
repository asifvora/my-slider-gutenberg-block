<?php
/**
 * Plugin Name: My slider block 
 * Description: My slider block  — is a Gutenberg block created via create-guten-block.
 * Author: asifvora
 * Author URI: asifvora.tk/
 * Version: 1.0.0
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__).'src/init.php';
