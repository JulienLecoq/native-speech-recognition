//
//  permission.swift
//  Plugin
//
//  Created by Julien Lecoq on 01/12/2022.
//  Copyright © 2022 Max Lynch. All rights reserved.
//

import Foundation

enum PermissionState: String {
    case prompt = "prompt"
    case granted = "granted"
    case denied = "denied"
}
