//
//  ViewController.swift
//  stuff
//
//  Created by Owner on 7/1/16.
//  Copyright © 2016 Gem Granofsky. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var red: UISlider!
    @IBOutlet weak var Geen: UISlider!
    @IBOutlet weak var blue: UISlider!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        self.view.backgroundColor = UIColor(red: CGFloat(redSlider.value), green: CGFloat(greenSlider.value), blue: CGFloat(blueSlider.value), alpha: 1)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func redSliderChanged(sender: AnyObject) {
    }
    @IBAction func greenSliderChanged(sender: AnyObject) {
    }
    @IBAction func blueSliderChanged(sender: AnyObject) {
    }
}

